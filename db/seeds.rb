# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require_relative('names')
require_relative('symbols')
require_relative('users')

$names.each_with_index do |name, i|
  Company.create(symbol: $symbols[i], name: name, share_price: 0)
end

$users.each_with_index do |username, i|
  cash = rand(10.01...100_000.00).round(2)
  User.create(username: username, password: 'password', cash_on_hand: cash)
end
