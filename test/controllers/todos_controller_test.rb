require 'test_helper'

class TodosControllerTest < ActionDispatch::IntegrationTest
  test "should get root as index" do
    get root_url
    assert_response :success
  end

  test 'should return "400  Bad request" if send no-content params' do
    invalid_params = { todo: { content: '' } }
    post todos_url(invalid_params)
    assert_response :bad_request
  end

  test 'should return "201 Created" if send valid params' do
    valid_params = { todo: { content: 'Valid todo!' } }
    post todos_url(valid_params)
    assert_response :created
  end
end
