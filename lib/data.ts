export interface PersonData {
  password: string;
  // message giờ có thể là mảng các phần text hoặc image (hỗn hợp)
  message: MessagePart[]; 
  wish: string;
  cardStyle: string;
  specialEmoji: string;
}

export type MessagePart =
  | { type: 'text'; text: string }
  | { type: 'image'; src: string; alt?: string };

export const personData: Record<string, PersonData> = {
  "Nguyễn Hồng Luyến": {
    password: "123",
    // ví dụ: chỉ ảnh
    message: [
      { type: "image", src: "/assets/messages/luyen-card.png", alt: "Thiệp cho Luyến" }
    ],
    wish: "VUI VẺ, HẠNH PHÚC VÀ LUÔN LUÔN XINH ĐẸP NHÉ 💖💖",
    cardStyle: "pink-rose",
    specialEmoji: "🌸"
  },
  "Trần Thị Phương Thảo": {
    password: "123",
    // ví dụ: hỗn hợp text + ảnh
    message: [
      { type: "text", text: "Chúc Thảo luôn mạnh mẽ, kiên cường và thành công trong mọi lĩnh vực! 💪" },
      { type: "image", src: "/assets/messages/thao-decor.png", alt: "Trang trí" }
    ],
    wish: "VUI VẺ, HẠNH PHÚC VÀ LUÔN LUÔN XINH ĐẸP NHÉ 💖💖",
    cardStyle: "purple-lavender",
    specialEmoji: "💪"
  },
  "Trần Thị Mai Phương": {
    password: "123",
    message: [{ type: 'text', text: "Chúc Mai Phương luôn duyên dáng, thông minh và gặp nhiều may mắn! 🌺" }],
    wish: "VUI VẺ, HẠNH PHÚC VÀ LUÔN LUÔN XINH ĐẸP NHÉ 💖💖",
    cardStyle: "coral-peach",
    specialEmoji: "🌺"
  },
  "Nguyễn Xuân Yến": {
    password: "123",
    message: [{ type: 'text', text: "Chúc Xuân Yến luôn tươi trẻ, năng động và tràn đầy năng lượng tích cực! 🌸" }],
    wish: "VUI VẺ, HẠNH PHÚC VÀ LUÔN LUÔN XINH ĐẸP NHÉ 💖💖",
    cardStyle: "spring-green",
    specialEmoji: "🌸"
  },
  "Nguyễn Thạnh Ngọc Ngọc": {
    password: "123",
    message: [{ type: 'text', text: "Chúc Ngọc Ngọc luôn quý giá như tên gọi, tỏa sáng và đáng yêu! 💎" }],
    wish: "VUI VẺ, HẠNH PHÚC VÀ LUÔN LUÔN XINH ĐẸP NHÉ 💖💖",
    cardStyle: "diamond-blue",
    specialEmoji: "💎"
  },
  "Nguyễn Thị Vân Anh": {
    password: "123",
    message: [{ type: 'text', text: "Chúc Vân Anh luôn dịu dàng như mây, trong sáng và hạnh phúc! ☁️" }],
    wish: "VUI VẺ, HẠNH PHÚC VÀ LUÔN LUÔN XINH ĐẸP NHÉ 💖💖",
    cardStyle: "cloud-white",
    specialEmoji: "☁️"
  },
  "Lê Thị Bình": {
    password: "123",
    message: [{ type: 'text', text: "Chúc Bình luôn bình an, hạnh phúc và có cuộc sống viên mãn! 🕊️" }],
    wish: "VUI VẺ, HẠNH PHÚC VÀ LUÔN LUÔN XINH ĐẸP NHÉ 💖💖",
    cardStyle: "peace-sage",
    specialEmoji: "🕊️"
  },
  "Phan Vũ Tuệ Nhật": {
    password: "123",
    message: [{ type: 'text', text: "Chúc Tuệ Nhật luôn thông minh, sáng suốt và thành công rực rỡ! ⭐" }],
    wish: "VUI VẺ, HẠNH PHÚC VÀ LUÔN LUÔN XINH ĐẸP NHÉ 💖💖",
    cardStyle: "star-gold",
    specialEmoji: "⭐"
  },
  "Tạ Thị Kiều Thi": {
    password: "123",
    message: [{ type: 'text', text: "Chúc Kiều Thi luôn xinh đẹp, duyên dáng và có cuộc sống hạnh phúc! 💖" }],
    wish: "VUI VẺ, HẠNH PHÚC VÀ LUÔN LUÔN XINH ĐẸP NHÉ 💖💖",
    cardStyle: "rose-red",
    specialEmoji: "💖"
  },
  "Trần Lê Minh Thư": {
    password: "123",
    message: [{ type: 'text', text: "Chúc Minh Thư luôn thông minh, học giỏi và có tương lai tươi sáng! 📚" }],
    wish: "VUI VẺ, HẠNH PHÚC VÀ LUÔN LUÔN XINH ĐẸP NHÉ 💖💖",
    cardStyle: "book-brown",
    specialEmoji: "📚"
  },
  "Phan Thị Mỹ Duyên": {
    password: "123",
    message: [{ type: 'text', text: "Chúc Mỹ Duyên luôn duyên dáng, xinh đẹp và có cuộc sống viên mãn! 🌸" }],
    wish: "VUI VẺ, HẠNH PHÚC VÀ LUÔN LUÔN XINH ĐẸP NHÉ 💖💖",
    cardStyle: "charm-pink",
    specialEmoji: "🌸"
  },
  "Trần Thị Minh Anh": {
    password: "123",
    message: [{ type: 'text', text: "Chúc Minh Anh luôn thông minh, tự tin và tỏa sáng như ngôi sao! ⭐" }],
    wish: "VUI VẺ, HẠNH PHÚC VÀ LUÔN LUÔN XINH ĐẸP NHÉ 💖💖",
    cardStyle: "bright-yellow",
    specialEmoji: "⭐"
  },
  "Nguyễn Tường Vy": {
    password: "123",
    message: [{ type: 'text', text: "Chúc Tường Vy luôn mạnh mẽ, kiên cường và có cuộc sống hạnh phúc! 💪" }],
    wish: "VUI VẺ, HẠNH PHÚC VÀ LUÔN LUÔN XINH ĐẸP NHÉ 💖💖",
    cardStyle: "strong-orange",
    specialEmoji: "💪"
  },
  "Võ Lê Quỳnh Như": {
    password: "123",
    message: [{ type: 'text', text: "Chúc Quỳnh Như luôn xinh đẹp, dịu dàng và có cuộc sống viên mãn! 🌺" }],
    wish: "VUI VẺ, HẠNH PHÚC VÀ LUÔN LUÔN XINH ĐẸP NHÉ 💖💖",
    cardStyle: "hibiscus-magenta",
    specialEmoji: "🌺"
  },
  "Phan Quỳnh Mai": {
    password: "123",
    message: [{ type: 'text', text: "Chúc Quỳnh Mai luôn tươi trẻ, năng động và tràn đầy năng lượng tích cực! 🌸" }],
    wish: "VUI VẺ, HẠNH PHÚC VÀ LUÔN LUÔN XINH ĐẸP NHÉ 💖💖",
    cardStyle: "cherry-blossom",
    specialEmoji: "🌸"
  },
  "Phan Võ Hồng Phước": {
    password: "123",
    message: [{ type: 'text', text: "Chúc Hồng Phước luôn may mắn, thành công và có cuộc sống hạnh phúc! 🍀" }],
    wish: "VUI VẺ, HẠNH PHÚC VÀ LUÔN LUÔN XINH ĐẸP NHÉ 💖💖",
    cardStyle: "lucky-green",
    specialEmoji: "🍀"
  },
  "Giả Thị Nhã Trân": {
    password: "123",
    message: [{ type: 'text', text: "Chúc Nhã Trân luôn thanh lịch, quý phái và có cuộc sống viên mãn! 👑" }],
    wish: "VUI VẺ, HẠNH PHÚC VÀ LUÔN LUÔN XINH ĐẸP NHÉ 💖💖",
    cardStyle: "royal-purple",
    specialEmoji: "👑"
  },
  "Lê Thị Minh Ngọc": {
    password: "123",
    message: [{ type: 'text', text: "Chúc Minh Ngọc luôn quý giá, tỏa sáng và có cuộc sống hạnh phúc! 💎" }],
    wish: "VUI VẺ, HẠNH PHÚC VÀ LUÔN LUÔN XINH ĐẸP NHÉ 💖💖",
    cardStyle: "jade-emerald",
    specialEmoji: "💎"
  },
  "Nguyễn Lê Mai Thanh": {
    password: "123",
    message: [{ type: 'text', text: "Chúc Mai Thanh luôn xinh đẹp, duyên dáng và có cuộc sống viên mãn! 💖" }],
    wish: "VUI VẺ, HẠNH PHÚC VÀ LUÔN LUÔN XINH ĐẸP NHÉ 💖💖",
    cardStyle: "blush-rose",
    specialEmoji: "💖"
  },
  "Phùng Thanh Trúc": {
    password: "123",
    message: [{ type: 'text', text: "Chúc Thanh Trúc luôn mạnh mẽ, kiên cường và có cuộc sống hạnh phúc! 🎋" }],
    wish: "VUI VẺ, HẠNH PHÚC VÀ LUÔN LUÔN XINH ĐẸP NHÉ 💖💖",
    cardStyle: "bamboo-green",
    specialEmoji: "🎋"
  },
  "Nguyễn Thị Huyền My": {
    password: "123",
    message: [{ type: 'text', text: "Chúc Huyền My luôn bí ẩn, quyến rũ và có cuộc sống viên mãn! 🌙" }],
    wish: "VUI VẺ, HẠNH PHÚC VÀ LUÔN LUÔN XINH ĐẸP NHÉ 💖💖",
    cardStyle: "moonlight-silver",
    specialEmoji: "🌙"
  },
  "Phó Thị Ngọc Minh": {
    password: "123",
    message: [{ type: 'text', text: "Chúc Ngọc Minh luôn quý giá, tỏa sáng và có cuộc sống hạnh phúc! 💎" }],
    wish: "VUI VẺ, HẠNH PHÚC VÀ LUÔN LUÔN XINH ĐẸP NHÉ 💖💖",
    cardStyle: "crystal-clear",
    specialEmoji: "💎"
  },
  "Nguyễn Thị Thúy Nga": {
    password: "123",
    message: [{ type: 'text', text: "Chúc Thúy Nga luôn xinh đẹp, dịu dàng và có cuộc sống viên mãn! 🌸" }],
    wish: "VUI VẺ, HẠNH PHÚC VÀ LUÔN LUÔN XINH ĐẸP NHÉ 💖💖",
    cardStyle: "gentle-pink",
    specialEmoji: "🌸"
  },
  "Trần Phạm Kim Hân": {
    password: "123",
    message: [{ type: 'text', text: "Chúc Kim Hân luôn quý giá, tỏa sáng và có cuộc sống hạnh phúc! 💎" }],
    wish: "VUI VẺ, HẠNH PHÚC VÀ LUÔN LUÔN XINH ĐẸP NHÉ 💖💖",
    cardStyle: "golden-amber",
    specialEmoji: "💎"
  }
};

// Utility function to convert name to URL slug
export function nameToSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^a-z0-9\s]/g, '') // Remove special characters
    .replace(/\s+/g, '') // Remove spaces
    .trim();
}

// Utility function to convert URL slug back to name
export function slugToName(slug: string): string | null {
  // Find the person by matching slug
  for (const [name] of Object.entries(personData)) {
    if (nameToSlug(name) === slug) {
      return name;
    }
  }
  return null;
}
