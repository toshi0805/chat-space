# README
## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association

- belongs_to :group
- belongs_to :user

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|   |
|image|string|    |
|group_id|integer|    |
|user_id|integer|    |

### Association
- 
- 
|Column|Type|Options|
|------|----|-------|
|group_name|string|
### Association
- has_many :groups_users_
- has_many :users,through: :groups_users


## usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|      |
|name|string|     |

### Association
- has_many :groups_users_
- has_many :groups_users,through: :users


