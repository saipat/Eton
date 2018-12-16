# == Schema Information
#
# Table name: notebooks
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Notebook < ApplicationRecord
   validates :name, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: 'User'

    has_many :notes, dependent: :destroy,
        foreign_key: :notebook_id,
        class_name: 'Note'
end
