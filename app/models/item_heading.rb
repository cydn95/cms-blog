# == Schema Information
#
# Table name: item_headings
#
#  id    :integer          not null, primary key
#  title :string           not null
#

class ItemHeading < ActiveRecord::Base
  has_one :item, as: :target, dependent: :destroy

  validates :title, presence: true
end
