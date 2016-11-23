class MessagesController < ApplicationController
	before_action do
   @conversation = Conversation.find(params[:conversation_id])
  end

	def index
		messages = @conversation.messages.all
		# if @messages.last
		# 	if @messages.last.user_id != current_user.id
		# 		@messages.last.read = true;
		# 	end
		# end
		ActionCable.server.broadcast 'allmessages', { messages: messages }
		head :ok
	end

	def new
		@message = @conversation.messages.new
		render json: @message, status: 200
	end

	def create
		@message = @conversation.messages.new(message_params)
		if @message.save
			ActionCable.server.broadcast 'messages',
				message: @message.body,
				user: @message.user
			head :ok
		else
			render json: @message.errors, status: 422
		end
	end

private

	def message_params
		params.require(:message).permit(:body, :user_id)
	end

end