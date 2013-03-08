class CreateDocuments < ActiveRecord::Migration
  def change
    create_table :documents do |t|
      t.string :name
      t.text :description

      t.integer :current_page, default: 0

      t.text :images_links
      t.timestamps
    end
  end
end
