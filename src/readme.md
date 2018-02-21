For comma-delmited:

```sh
echo "email,date" > repo.csv
git log master --pretty='%aE,%ad' --date=short >> repo.csv
pbcopy < repo.csv
```

For json

(remember to remove the trailing comma)

```sh
echo "[" > repo.json
git log master --pretty='{"email":"%aE", "date":"%ad"},' --date=short >> repo.json
echo "]" >> repo.json
pbcopy < repo.json
```
