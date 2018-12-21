json.extract! note, :id, :title, :notebook_id, :plain_txt_body, :rich_txt_body 

json.notebook note.notebook

json.tags note.tags, :id, :tag_name, :user_id