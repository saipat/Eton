class Api::TagsNotesController < ApplicationController
        def index
            # @tagged_notes = []
            # current_user.notes.each do |note|
            #         note.tags_notes.each do |tag_note|
            #                 @tagged_notes.push(tag_note)
            #         end
            # end
            @note = Note.find(params[:id])
            @tags = @note.tags

            render 'api/tags'
        end

        # def show
        #     @tagged_note = TagsNote.find(params[:id])
        #     render 'api/tags'
        # end

        def create
            @tagged_note = TagsNote.new(tagged_notes_params)
            @tag = @tagged_note.tag 
            if @tagged_note.save
                render 'api/tags/show'
            else 
                render json: @tagged_note.errors.full_messages, status: 422
            end
        end

        def destroy
            @tagged_note = TagsNote.find(params[:id])

            if TagsNote.destroy(@tagged_note.id)
                render :show
            else
             render json: @tagged_note.errors.full_messages, status: 422
            end
        end



    
    private
    def tagged_notes_params
        params.require(:tags_note).permit(:tag_id, :note_id)
    end

end
