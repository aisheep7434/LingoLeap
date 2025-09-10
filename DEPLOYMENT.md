# Vercel 部署说明

## 部署步骤

1. **连接仓库到 Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 点击 "New Project"
   - 选择 GitHub 仓库 "aisheep7434/LingoLeap"
   - 点击 "Import"

2. **配置环境变量**
   在 Vercel 项目设置中添加以下环境变量：
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://uejrkjhovjqhvwbvsaep.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVlanJramhvdmpxaHZ3YnZzYWVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0NzU5MzQsImV4cCI6MjA3MzA1MTkzNH0.yVRuLXgouKCLNuMddalbTGzUcnaLPRIgLdvfbCFz2lY
   DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@uejrkjhovjqhvwbvsaep.supabase.co:5432/postgres
   NEXTAUTH_SECRET=your-nextauth-secret-here
   ```

3. **部署项目**
   - Vercel 会自动检测 Next.js 项目并开始构建
   - 构建完成后，会分配一个预览 URL
   - 确认应用正常工作后，可以配置自定义域名

## 注意事项

- 确保在 Supabase 中配置了正确的 CORS 设置
- 数据库连接字符串需要包含正确的密码
- 生产环境建议使用更强的 NEXTAUTH_SECRET