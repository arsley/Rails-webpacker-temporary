require 'test_helper'

class TodosControllerTest < ActionDispatch::IntegrationTest
  test "should get root as index" do
    get root_url
    assert_response :success
  end

end
