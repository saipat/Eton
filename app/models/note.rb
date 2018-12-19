# == Schema Information
#
# Table name: notes
#
#  id             :bigint(8)        not null, primary key
#  title          :string           not null
#  notebook_id    :integer          not null
#  plain_txt_body :text             not null
#  rich_txt_body  :text             not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Note < ApplicationRecord
    # validate :notebook_id_null
    validates :title, :notebook_id, presence: true


    belongs_to :notebook,
        foreign_key: :notebook_id,
        class_name: 'Notebook'

    # has_one :user,
    #     through: :notebook,
    #     source: :user

    # private
    # def notebook_id_null
    #     if self.notebook_id.nil?
    #         self.notebook_id = Notebook.all.find { |notebook| notebook.name == "<Inbox>" }.id
    #     end
    # end
    
end
