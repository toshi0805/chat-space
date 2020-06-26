# README
## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|user|references|null: false, foreign_key: true|

### Association

- belongs_to :group
- belongs_to :user

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|   |
|image||references|
|group|references|null: false, foreign_key: true |
|user|references|null: false, foreign_key: true|

### Association
belongs_to :group
belongs_to :user
## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|
### Association
- has_many :groups_users
- has_many :users,through: :groups_users

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|
### Association
- has_many :groups_users
- has_many :groups,through: :groups_users
- has_many :messages_user
- has_many :users,through: :messages
