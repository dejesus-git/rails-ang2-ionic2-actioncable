class MessagesChannel < ApplicationCable::MessagesChannel
	def subscribed
		# stream_from 'messages'
		stream_from 'allmessages'
	end
end