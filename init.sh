if ![ -d  "./node_modules" ]; then
docker exec app npm i -d --build-from-resource
fi

docker exec app npm start serve
