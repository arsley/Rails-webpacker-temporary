require 'test_helper'

class PageControllerTest < ActionDispatch::IntegrationTest
  test "should get index as root" do
    get root_url
    assert_response :success
  end

end
