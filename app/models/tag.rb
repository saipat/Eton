class Tag < ApplicationRecord
    validates :tag_name, :user_id, presence: true
    

    belongs_to :user, 
        foreign_key: :user_id,
        class_name: 'User'

    has_many :tags_notes,
        inverse_of: :tag, 
        dependent: :destroy

    has_many :notes,
        through: :tags_notes,
        source: :note
end
