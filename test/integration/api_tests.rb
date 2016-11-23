require 'test_helper'

class MessagesTest < ActionDispatch::IntegrationTest
	setup { host! 'api.localhost:3000' }

	test 'returns conversations' do
		get '/conversations'
		assert_equal 200, response.status 
	end

end