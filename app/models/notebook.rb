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
   validates :title, :user_id, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: 'User'

end
