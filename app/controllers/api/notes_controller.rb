class Api::NotesController < ApplicationController

    def create
        @note = Note.new(note_params)
        if @note.save
            render "api/notes/show"
        else
            render json: @note.errors.full_messages,status: 422
        end
    end

    def index
        @notes = current_user.notes
        render :index
    end

    def show
        @note = current_user.notes.find(params[:id])
        if @note
            render 'api/notes/show'
        else
            render json: ["Notes not found. Try different name!"], status:404
        end
    end

    def update
        @note = current_user.notes.find(params[:id])
        if @note.update(note_params)
            render "api/notes/show"
        else
            render json: @note.errors.full_messages, status: 422
        end
    end

    def destroy
        @note = current_user.notes.find(params[:id])
        @notes.destroy
        render "api/notes/index"
    end

    def note_params
        params.require(:note).permit(:title, :notebook_id, :plain_txt_body, :rich_text_body)
    end

end
