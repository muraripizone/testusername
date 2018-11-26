cd /root/Projects/testusername

echo "Pulling from Master" 

git pull origin master

echo "Pulled successfully from master"

echo "Restarting server..."

npm i

echo "Installing Package ..."

pm2 restart 4

echo "Server restarted Successfully"