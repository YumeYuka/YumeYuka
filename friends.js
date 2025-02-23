const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // 设置视口大小，确保内容完全显示
    await page.setViewport({ width: 1000, height: 400 });

    await page.setContent(`
    <!DOCTYPE html>
    <html>
    <body>
      <div style="display: flex; gap: 30px; justify-content: center; align-items: center; min-height: 300px;">
        <div style="display: flex; align-items: center; background: #ffffff; border-radius: 40px; padding: 20px; width: 350px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
          <div style="margin-right: 20px;">
            <a href="https://github.com/YumeYukal">
              <img src="https://github.com/Fengying1314.png" alt="FengYing" width="100" height="100" style="border-radius: 50%;">
            </a>
          </div>
          <div style="text-align: left;">
            <h3 style="margin: 0; font-size: 20px;">枫莹</h3>
            <p style="margin: 10px 0; color: #666; font-size: 16px;">一起喵喵喵.</p>
          </div>
        </div>

        <div style="display: flex; align-items: center; background: #ffffff; border-radius: 40px; padding: 20px; width: 350px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
          <div style="margin-right: 20px;">
            <a href="https://github.com/GunRain">
              <img src="https://github.com/GunRain.png" alt="GunRain" width="100" height="100" style="border-radius: 50%;">
            </a>
          </div>
          <div style="text-align: left;">
            <h3 style="margin: 0; font-size: 20px;">咲汀</h3>
            <p style="margin: 10px 0; color: #666; font-size: 16px;">虽然名为枪雨，但是我现在还不会造枪.</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `);

    // 调整截图尺寸（宽度 800px，高度 400px）
    await page.screenshot({ path: 'friends_layout.png', width: 800, height: 400 });
    await browser.close();
})();