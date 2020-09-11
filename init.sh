if [ ! -d  "./node_modules" ]; then
npm i -d --build-from-resource
sh setup.sh
fi
npm start serve
