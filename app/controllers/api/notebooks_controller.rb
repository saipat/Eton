class Api::NotebooksController < ApplicationController
    def create
        @notebook = Notebook.new(notebook_params)
        if @notebook.save
            render 'api/notebooks/show'
        else
            render json: @notebook.errors.full_messages, status: 422
        end
    end

    def index
        @notebooks = current_user.notebooks
        render :index
    end

    def show
        @notebook = current_user.notebooks.find(params[:id])
        if @notebook
            render 'api/notebooks/show'
        else
            render json: ["Notebook not found. Try different name!"], status:404
        end
    end

    def update
        @notebook = current_user.notebooks.find(params[:id])
        if @notebook.update(notebook_params)
            render 'api/notebooks/show'
        else
            render json: ["Notebook not found. Try different name!"], status:404
        end
    end

    def destroy
        @notebook = current_user.notebooks.find(params[:id])
        @notebook.destroy
        render "api/notebooks/show"
    end

    private

    def notebook_params
        params.require(:notebook).permit(:name, :user_id)
    end
end
