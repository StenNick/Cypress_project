для запуска тестов использовать команду .\node_modules\.bin\cypress open

или же запустить через iterm с командой - npm run test

еще можно через - npm cypress open


удалить гит из проекта - rm -rf .git

------------------------
создание репозитория

echo "# Cypress_project" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/StenNick/Cypress_project.git
git push -u origin main