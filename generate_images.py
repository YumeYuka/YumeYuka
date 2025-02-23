import json
from PIL import Image, ImageFont, ImageDraw
import textwrap
import requests
import os

def wrap_text(text, font, max_width):
    char_width = font.getsize("A")[0]
    max_chars = max_width // char_width
    return textwrap.fill(text, max_chars)

def generate_image(username, name, introduction):
    response = requests.get(f"https://github.com/{username}.png")
    with open(f"{username}_profile.png", "wb") as f:
        f.write(response.content)
    profile_img = Image.open(f"{username}_profile.png")
    profile_img = profile_img.resize((200, 200))
    width, height = 400, 200
    new_img = Image.new("RGB", (width, height), color="white")
    new_img.paste(profile_img, (0, 0))
    draw = ImageDraw.Draw(new_img)
    font_name = ImageFont.truetype("arial", 24)
    font_introduction = ImageFont.truetype("arial", 16)
    draw.text((220, 20), name, font=font_name, fill="black")
    max_width = 180
    wrapped_introduction = wrap_text(introduction, font_introduction, max_width)
    lines = wrapped_introduction.split("\n")
    y_text = 60
    for line in lines:
        draw.text((220, y_text), line, font=font_introduction, fill="black")
        y_text += font_introduction.getsize(line)[1] + 2
    if not os.path.exists("images"):
        os.makedirs("images")
    new_img.save(f"images/{username}.png")
    os.remove(f"{username}_profile.png")

def main():
    with open("friends.json", "r") as f:
        friends = json.load(f)
    for friend in friends:
        generate_image(friend["username"], friend["name"], friend["introduction"])

if __name__ == "__main__":
    main()