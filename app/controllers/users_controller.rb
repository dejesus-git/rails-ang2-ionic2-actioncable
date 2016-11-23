class UsersController < ApplicationController
	def index
		@users = User.all
	end

	def create
		@user = User.create(user_params)
		if @user.save
			render json: @user, status: :created
		else
			render json: @user.errors, status: 422
		end
	end

	private

	def user_params
		params.require(:user).permit(:name, :email, :password, :password_confirmation)
	end
end