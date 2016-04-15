class Initialize < ActiveRecord::Migration[5.0]
  def change

    create_table :authors do |t|
      t.string :name, null: false
      t.string :image
      t.text :description

      t.timestamps null: false
    end

    create_table :social_accounts do |t|
      t.belongs_to :author, null: false
      t.string :name, null: false
      t.string :url, null: false
      t.string :image, null: false
    end

    create_table :articles do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.boolean :accepted, null: false, default: false
      t.datetime :published_at

      t.timestamps null: false
    end

    create_table :comments do |t|
      t.belongs_to :article, index: true, null: false
      t.text :comment, null: false
      t.integer :reply_id

      t.timestamps null: false
    end

    create_table :sites do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :image
      t.string :source_url

      t.timestamps null: false
    end

    create_table :items do |t|
      t.belongs_to    :article, index: true, null: false
      t.integer       :sort_rank, null: false
      t.belongs_to    :target, polymorphic: true, null: false, index: true

      t.timestamps    null: false
    end

    add_index :items, [:article_id, :sort_rank]

    create_table :item_images do |t|
      t.text    :source_url
      t.string    :image, null: false
    end

    create_table :item_texts do |t|
      t.integer :type, null: false, default: 1, comment: '1: normal text, 2: source_code'
      t.text      :description, null: false
    end

    create_table :item_headings do |t|
      t.string    :title, null: false
    end

    create_table :item_sub_headings do |t|
      t.string     :title, null: false
    end

    create_table :item_links do |t|
      t.string     :source_title, null: false
      t.text       :source_url, null: false
    end

    create_table :item_quotes do |t|
      t.text       :description, null: false
      t.string     :source_title, null: false
      t.text       :source_url, null: false
    end

    create_table :item_twitters do |t|
      t.text      :source_url, null: false
      t.text      :description, null: false
      t.string    :author_image_url, null: false
      t.string    :author_name, null: false
      t.string    :author_screen_name, null: false
    end

    create_table :article_tags do |t|
      t.string :name, null: false
      t.timestamps
    end

    create_table :article_taggings do |t|
      t.belongs_to :article, null: false
      t.belongs_to :article_tag, null: false
    end

    add_index :article_taggings, [:article_id, :article_tag_id], unique: true


    create_table :projects do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :image, null: false
      t.string :sample_url
      t.string :source_url
      t.boolean :accepted, null: false, default: false

      t.timestamps null: false
    end

    create_table :project_tags do |t|
      t.string :name, null: false

      t.timestamps null: false
    end

    create_table :project_taggings do |t|
      t.belongs_to :project, null: false
      t.belongs_to :project_tag, null: false
    end

    add_index :project_taggings, [:project_id, :project_tag_id], unique: true

  end
end