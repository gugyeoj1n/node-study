const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");
const multer = require("multer");

dotenv.config();
const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");

const app = express();
const port = 9393;

// 파일 업로드용 폴더 자동 생성 및 저장 경로, 파일명, 속도 제한 등의 설정
try {
    fs.readdirSync("uploads");
    console.log("UPLOADS FOLDER SYNCRONIZED !");
} catch (err) {
    console.error("NO UPLOADS FOLDER !! GENERATING ...");
    fs.mkdirSync("uploads");
}

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, "uploads/");
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(
                null,
                path.basename(file.originalname, ext) + Date.now() + ext
            );
        },
    }),
    limits: {
        fileSize: 5 * 1024 * 1024,
    },
});

// 환경 변수에 따라 morgan 모드 교체
app.use((req, res, next) => {
    if (process.env.NODE_ENV === "production")
        morgan("combined")(req, res, next);
    else morgan("dev")(req, res, next);
});
app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
    session({
        resave: false,
        saveUninitialized: false,
        secret: process.env.COOKIE_SECRET,
        cookie: {
            httpOnly: true,
            secure: false,
        },
        name: "session-cookie",
    })
);

// 라우터 연결
app.use("/", indexRouter);
app.use("/user", userRouter);

app.use((req, res, next) => {
    console.log("GET EVERY REQUEST");
    next();
});

// =============== GET API ===============

app.get("/upload", (req, res) => {
    res.sendFile(path.join(__dirname, "multipart.html"));
});

// =============== POST API ===============

app.post("/upload", upload.single("image"), (req, res) => {
    console.log("POST (IMAGE) :", req.file);
    res.send("ok");
});

app.listen(port, () => {
    console.log(`${port} PORT RUNNING`);
});
