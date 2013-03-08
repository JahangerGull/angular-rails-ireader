AngularIreader::Application.routes.draw do
  resources :documents do
    member do
      post :slide_changed
    end
  end

  root to: 'welcome#index'

end
