# insuranceReact

1. Установить nvm для удобства переключения между версиями ноды
  https://stackoverflow.com/questions/25654234/why-isnt-node-version-manager-nvm-recognized-on-windows
  
    ### В проекте используется: node `v18.16.0`
    
2. Как работать с проектом git?
  Ветка `main` только для релиза, мы работаем с `dev`
  Заходим на ветку `dev`, от неё создаём побочную ветку (обязательно делаем `git pull`) и называем по имени сабтаски из jira, например `git checkout -b MYI-***`, работаем..., добавляем изменения..., коммитим....
  Если `dev` был изменён, то делаем следующие действия: 
       1. находясь на своей ветке делаем `git branch --set-upstream-to=origin/dev MYI-***`
       2. `git pull`
       3. устраняем конфликты..., добавляем изменения..., коммитим...
       4. `git push origin HEAD` 
1. Переходим по ссылке в консоли на проект открываем вкладку слева `Merge requests`, затем по центру снизу будет `New merge request`, слева выставляем свою ветку, справа (обязательно проверить) устанавливаем ветку `dev` и нажимаем `Compare branches and continue`. Называем title или оставляем(по коммиту). Если хотим сделать мерж, но чтобы ТехЛид пока не смотрел: прямо под title есть кнопка `Start the title with Draft`, отменить так же. В `Assignee` выставляем себя. В `Reviewer` указываем ТехЛида. Всегда можно изменить информацию о мерже, сверху справа есть кнопка `Edit`. 
2. Проверка чужих мержей происходит на сайте во вкладке `Changes` обязательно проверить url должен заканчиваться на `.../difs`. Слева от нумерации строки есть кнопка, по нажатию на которую, мы можем оставить комментарий по коду(`Thread`).
3. После закрытия всех тредов и получения апрува от техлида можно нажать `Merge`.
4. Настройка Prettier и ESLint для WebStorm `File -> Settings -> в поиске Prettier/ESLint -> выбираем Manual Prettier Configuration -> из предложенных вариантов (если нет инициализировать проект) выбрать, что в папке node_modules/(prettier/eslint)`
5. Работа со storybook показана тут https://youtu.be/lUf8qC_xFHo?t=471