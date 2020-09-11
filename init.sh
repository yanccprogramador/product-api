if [ ! -d  "./node_modules" ]; then
npm i -d --build-from-resource
npm run setup
fi
npm start serve
