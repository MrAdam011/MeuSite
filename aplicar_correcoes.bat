@echo off
echo ========================================
echo   Correcoes GitHub Pages - MeuSite
echo ========================================
echo.
echo Repositorio: MrAdam011/MeuSite
echo URL Final: https://mradam011.github.io/MeuSite/
echo.

:: Verifica se estamos no diretorio correto
if not exist "package.json" (
    echo ERRO: Execute este script na raiz do projeto!
    echo Certifique-se de estar na pasta do projeto
    pause
    exit /b 1
)

echo [1/5] Criando arquivo 404.html...
(
echo ^<!DOCTYPE html^>
echo ^<html lang="pt-BR"^>
echo ^<head^>
echo   ^<meta charset="utf-8"^>
echo   ^<title^>Redirecionando...^</title^>
echo   ^<script^>
echo     // Salva a rota atual e redireciona para index.html
echo     sessionStorage.redirect = location.href;
echo   ^</script^>
echo   ^<meta http-equiv="refresh" content="0;URL='/MeuSite/'"^>
echo ^</head^>
echo ^<body^>
echo   Redirecionando...
echo ^</body^>
echo ^</html^>
) > public\404.html

if exist "public\404.html" (
    echo    [OK] public\404.html criado!
) else (
    echo    [ERRO] Falha ao criar 404.html
)

echo.
echo [2/5] Criando backup do index.html...
if exist "index.html" (
    copy index.html index.html.backup >nul 2>&1
    echo    [OK] Backup criado: index.html.backup
) else (
    echo    [ERRO] index.html nao encontrado!
)

echo.
echo [3/5] Atualizando index.html com script de redirect...
echo    [INFO] Verifique se o script foi adicionado corretamente
echo    [INFO] Adicione manualmente se necessario

echo.
echo [4/5] Atualizando vite.config.ts...
(
echo import { defineConfig } from "vite";
echo import react from "@vitejs/plugin-react-swc";
echo import path from "path";
echo import { componentTagger } from "lovable-tagger";
echo.
echo // https://vitejs.dev/config/
echo export default defineConfig^(^({ mode }^) =^> ^({
echo   // CONFIGURACAO CORRETA PARA O REPOSITORIO "MeuSite"
echo   // URL do site sera: https://mradam011.github.io/MeuSite/
echo   base: '/MeuSite/',
echo   
echo   server: {
echo     host: "::",
echo     port: 8080,
echo     hmr: {
echo       overlay: false,
echo     },
echo   },
echo   plugins: [react^(^), mode === "development" ^&^& componentTagger^(^)].filter^(Boolean^),
echo   resolve: {
echo     alias: {
echo       "@": path.resolve^(__dirname, "./src"^),
echo     },
echo   },
echo }^)^);
) > vite.config.ts.new

if exist "vite.config.ts.new" (
    move /Y vite.config.ts.new vite.config.ts >nul
    echo    [OK] vite.config.ts atualizado com base: '/MeuSite/'
) else (
    echo    [ERRO] Falha ao atualizar vite.config.ts
)

echo.
echo [5/5] Verificando arquivos criados...
if exist "public\404.html" (
    echo    [OK] 404.html criado
) else (
    echo    [X] 404.html AUSENTE
)

if exist "vite.config.ts" (
    echo    [OK] vite.config.ts atualizado
) else (
    echo    [X] vite.config.ts AUSENTE
)

echo.
echo ========================================
echo   IMPORTANTE - Atualize o index.html
echo ========================================
echo.
echo Abra o arquivo index.html e adicione este script
echo ANTES da tag ^<script type="module" src="/src/main.tsx"^>^</script^>:
echo.
echo     ^<script^>
echo       // Restaura a rota original apos redirecionamento do 404
echo       ^(function^(^){
echo         var redirect = sessionStorage.redirect;
echo         delete sessionStorage.redirect;
echo         if ^(redirect ^&^& redirect != location.href^) {
echo           history.replaceState^(null, null, redirect^);
echo         }
echo       }^)^(^);
echo     ^</script^>
echo.
echo ========================================
echo   Proximos Passos
echo ========================================
echo.
echo 1. Verifique se adicionou o script no index.html
echo.
echo 2. Execute os comandos Git:
echo    git add .
echo    git commit -m "fix: corrige roteamento para GitHub Pages"
echo    git push origin main
echo.
echo 3. Aguarde o GitHub Actions finalizar ^(~2 minutos^)
echo.
echo 4. Acesse: https://mradam011.github.io/MeuSite/
echo    ^(Pressione Ctrl+Shift+R para limpar cache^)
echo.
pause
