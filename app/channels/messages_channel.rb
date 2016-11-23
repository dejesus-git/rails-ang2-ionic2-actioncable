class MessagesChannel < ApplicationCable::Channel
	def subscribed
		# stream_from 'messages'
		stream_from 'allmessages'
	end
end
