class Api::UsersController < ApplicationController

  skip_before_action :confirm_authentication, except: [:update]
  
  # get '/api/me'
  def show
    if current_user
      render json: current_user, status: :ok
    else
      render json: { error: 'No active session' }, status: :unauthorized
    end
  end

  # post '/api/signup'
  def create
    user = User.create(user_params)
    if user.valid?
      session[:user_id] = user.id
      render json: user, status: :ok
    else
      render json: { error: user.errors }, status: :unprocessable_entity
    end
  end

  def update
    if current_user.update(update_user_params)
      render json: current_user, status: :ok
    else
      render json: user.errors, status: 422
    end
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end

  def update_user_params
    params.permit(:profile_picture_url, :profile_picture_thumbnail_url)
  end
  
end
