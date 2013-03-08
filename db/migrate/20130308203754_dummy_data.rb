class DummyData < ActiveRecord::Migration
  def up
    a = Document.new
    a.name = "Document one"
    a.description = "Document one description"
    a.images_links = [{:url=>"/assets/rails.png"}, {:url=>"/assets/1.jpg"}, {:url=>"/assets/2.jpg"}].to_json
    a.save

    a = Document.new
    a.name = "Document two"
    a.description = "Document two description"
    a.images_links = [{:url=>"/assets/rails.png"}, {:url=>"/assets/2.jpg"}, {:url=>"/assets/1.jpg"}].to_json
    a.save
  end

  def down
  end
end
