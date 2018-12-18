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
        @notes = []
        if params[:notebook_id]
            notebook = current_user.notebooks.where(id: params[:notebook_id])
            @notes = notebook ? notebook.notes : []
        else
            current_user.notebooks.each do |notebook|
                if (!notebook.notes.empty?)
                    # puts notebook.notes.length 
                    @notes.push(notebook.notes)
                else
                    puts "Empty Notes for " + notebook.name
                end
            end
            # puts "i am rails"
            # puts @notes
            @notes
        end
        @notes
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
