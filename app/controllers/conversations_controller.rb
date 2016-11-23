class ConversationsController < ApplicationController
	def index
		@conversations = Conversation.all

		render json: @conversations, status: 200 
	end

	def create
		if Conversation.between(params[:sender_id],params[:recipient_id]).present?
	  	@conversation = Conversation.between(params[:sender_id],
	    params[:recipient_id]).first

	    render json: @conversation, status: 200
		else
	  	@conversation = Conversation.create!(conversation_params)
	  	if @conversation.save
	  		render json: @conversation, status: :created, location: @conversation
	  	else
	  		render json: @conversation.errors, status: 422
	  	end
		end
	end

private

	def conversation_params
		params.permit(:sender_id, :recipient_id)
	end

end
