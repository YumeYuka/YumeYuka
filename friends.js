const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // 设置视口大小，确保内容完全显示（每行两个卡片，总宽度约 710px + 边距）
    await page.setViewport({ width: 1000, height: 500 });

    await page.setContent(`
    <!DOCTYPE html>
    <html>
    <body>
      <div style="display: flex; flex-wrap: wrap; gap: 30px; justify-content: center; align-items: center; min-height: 400px;">
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

        <div style="display: flex; align-items: center; background: #ffffff; border-radius: 40px; padding: 20px; width: 350px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
          <div style="margin-right: 20px;">
            <a href="https://github.com/NuoFang6">
              <img src="https://github.com/NuoFang6.png" alt="NuoFang" width="100" height="100" style="border-radius: 50%;">
            </a>
          </div>
          <div style="text-align: left;">
            <h3 style="margin: 0; font-size: 20px;">NuoFang</h3>
            <p style="margin: 10px 0; color: #666; font-size: 16px;"></p>
          </div>
        </div>

        <div style="display: flex; align-items: center; background: #ffffff; border-radius: 40px; padding: 20px; width: 350px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
          <div style="margin-right: 20px;">
            <a href="https://github.com/Cai-Ming-Yu">
              <img src="https://github.com/Cai-Ming-Yu.png" alt="Cai-Ming-Yu" width="100" height="100" style="border-radius: 50%;">
            </a>
          </div>
          <div style="text-align: left;">
            <h3 style="margin: 0; font-size: 20px;">彩銘羽</h3>
            <p style="margin: 10px 0; color: #666; font-size: 16px;">A common developer..</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `);

    // 调整截图尺寸（宽度 1000px，高度 500px）
    await page.screenshot({ path: 'friends_layout.png', width: 1000, height: 500 });
    await browser.close();
})();