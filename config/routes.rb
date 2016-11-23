Rails.application.routes.draw do

	mount ActionCable.server => '/cable'
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	mount_devise_token_auth_for 'User', at: 'auth'
		resources :conversations do 
			resources :messages
		end 

end
