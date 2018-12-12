class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_email(
                  params[:user][:email],
                  params[:user][:password]
                );  

        if @user
        login(@user)
        render "api/users/show"
        else
        render json: ["Invalid Credentials. Plese enter correct username/password."], status: 401
        end
    end

  def destroy
    @user = current_user
    if @user
      logout
      render json: {}
    else
      render json: ["You have signed out! Please sign in to enter!"], status: 404 #wep page cant found error
    end
  end
end
