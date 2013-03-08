class ApplicationController < ActionController::Base

  # before_filter :intercept_html_requests

  # def intercept_html_requests
  #   render('layouts/application')
  # end

  protect_from_forgery
end
