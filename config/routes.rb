Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  namespace :api, defaults: { format: :json} do 
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :list_videos, only: [:index, :create, :destroy]

    resources :videos, only: [:index, :show] do
      collection do 
        get 'search'
      end 
    end 

  end 
end
