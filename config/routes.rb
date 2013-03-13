AngularIreader::Application.routes.draw do
  resources :documents do
    member do
      post :slide_changed
      post :auto_reporting
    end
  end

  root to: 'welcome#index'

end
