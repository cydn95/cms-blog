class ProjectSerializer < ActiveModel::Serializer
  self.root = false
  format_keys :lower_camel
  attributes :id, :title, :accepted, :description, :source_url, :sample_url, :image, :tag_suggestions

  has_many :taggings, root: :tags

  def image
    object.try(:image_url)
  end

  def tag_suggestions
    Tag.pluck(:name)
  end

end
