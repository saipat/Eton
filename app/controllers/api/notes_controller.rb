class Api::NotesController < ApplicationController

    def create
        temp_params = note_params
        if(temp_params[:notebook_id].nil?) 
            temp_params[:notebook_id] = current_user.notebooks.find{ |notebook| notebook.name == "<Inbox>" }.id
        end
        tag_name = temp_params[:tag]
        temp_params = temp_params.except(:tag)  
        @note = Note.new(temp_params)
        if @note.save!
            save_tag(tag_name, @note.id) unless tag_name.nil?
            render "api/notes/show"
        else
            render json: @note.errors.full_messages,status: 422
        end
    end

    def all_notes
        @notes = current_user.notes
        render "api/notes/index"
    end

    def index
        @notes = []
        if params[:notebook_id]
            notebook = Notebook.where(id: params[:notebook_id])
            @notes = (notebook != nil ) ? notebook[0].notes : []
        else
           @notes = current_user.notes
        end
        
        render "api/notes/index"
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
        temp_params = note_params
        if(temp_params[:notebook_id].nil?) 
            temp_params[:notebook_id] = current_user.notebooks.find{ |notebook| notebook.name == "<Inbox>" }.id
        end
        tag_name = temp_params[:tag]
        temp_params = temp_params.except(:tag)
        @note = current_user.notes.find(temp_params[:id])
        if @note.update(temp_params)            
            save_tag(tag_name, @note.id) unless tag_name.nil?
            render "api/notes/show"
        else
            render json: @note.errors.full_messages, status: 422
        end
    end

    def destroy
        @note = current_user.notes.find(params[:id])
        @note.destroy
        render "api/notes/show"
    end

    private
    def save_tag(tag_name, note_id)
        @tag = current_user.tags.find { |tag| tag.tag_name == tag_name }
        if(@tag.nil?)
            @tag = Tag.new({:tag_name => tag_name, :note_ids => [note_id]})
            @tag.user_id = current_user.id
            @tag.save!
        end            
        puts @tag
    end 

    def note_params
        params.require(:note).permit(:title, :notebook_id, :plain_txt_body, :rich_txt_body, :tag, :id)
    end

end
