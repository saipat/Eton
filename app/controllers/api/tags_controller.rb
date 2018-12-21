class Api::TagsController < ApplicationController
  def create
    @tag = Tag.new(tags_params)
    @tag.user_id = current_user.id
    if @tag.save
      render 'api/tags/show'
    else
      render json: @tag.errors.full_messages, status: 422
    end 
  end

  def show
    @tag = current_user.tags.find(params[:id])
    if @tag
      render 'api/tags/show'
    else
      render json: ["Tag not found, Please try again."], status:404
    end
  end

  def index
    @tags = current_user.tags
    render 'api/tags/index'
  end

  def destroy
    @tag = current_user.tags.find(params[:id])
    if @tag
      @tag.destroy
      render '/api/tags/show'
    else
      render json: ["Unauthorized access to tag"], status: 401
    end
  end

private
  def tags_params
    params.require(:tag).permit(:tag_name, note_ids: [])
  end
end