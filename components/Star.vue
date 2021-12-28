<template>
    <canvas id="PoPo" ref="PoPo" />
</template>
<script>
export default {
    name: "PoPo",
    props: {
        conf: {
            type: Object,
            default: () => {},
        },
    },
    data() {
        return {
            defaultConf: {
                mode: "down", // 运动模式
                count: 50, // 数量
                size: 10, // 大小
                randomSize: true, // 随机大小
                colors: ["rgba(255,243,125,1)", "rgba(232,163,114,1)", "rgba(255,138,224,1)", "rgba(114,118,232,1)", "rgba(169,255,239,1)"],
                randomColor: true, // 随机颜色
                speed: 0.1, // 运动速度
                icon: "", // imgURL
                hornOfStar: 5 // N角星
            },
            itemList: [],
            angle: 0,
        };
    },
    methods: {
        getRandom(min, max) {
            return Math.floor(Math.random()*(max - min + 1) + min);
        }
    },
    mounted() {
        this.$nextTick(() => {
            const img = new Image(); // 创建img元素
            const [ w, h ] = [window.innerWidth, window.innerHeight];
            const { conf, itemList, defaultConf } = this;
            let { angle } = this;
            const { mode, count, size, randomSize, colors, randomColor, speed, icon } = Object.assign({}, defaultConf, conf);

            const canvas = this.$refs.PoPo;
            const ctx = canvas.getContext("2d");
            canvas.width = w;
            canvas.height = h;

            for (let i = 0; i < count; i++) {
                // x,y圆心掉的坐标位置，r代表圆的半径，d每个圆的每个圆之间的间距，c代表的颜色
                itemList.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    r: randomSize ? Math.random() * size : size,
                    c: randomColor ? colors[i % 4] : colors[0],
                });
            }

            if (!["star", "circle"].includes(icon)) {
                img.onload = function() {
                    requestAnimationFrame(draw); // 执行和调用函数
                };
                img.src = icon; // 设置图片源地址
            } else {
                requestAnimationFrame(draw);
            }
            function draw() {
                ctx.clearRect(0, 0, w, h);
                for (let i = 0; i < count; i++) {
                    const { x, y, r } = itemList[i];
                    // 绘制图像
                    ctx.drawImage(img, x, y, r * 4, r * 4);
                }
                drop();
            }

            // 掉落
            // 记住两个公式： Math.sin(弧度)返回是一个 0 1 -1 的数字 Math.cos(1 0 -1 ) 自由体
            const drop = () => {
                angle += 0.01;
                for (let i = 0; i < count; i++) {
                    const item = itemList[i];
                    item.x += Math.cos(angle) * 0.2;
                    if (mode === "down") item.y += item.r * speed;
                    if (mode === "up") item.y -= item.r * speed;
                    if (mode === "fload") item.y += Math.cos(angle + item.d) * 0.5;
                    if (item.x >= w + size || item.x <= 0 - size || item.y >= h + size || item.y <= 0 - size) {
                        if (mode === "up") {
                            item.y = h + size - 1;
                            item.x = w * Math.random();
                        } else if (mode === "float") {
                            item.y = h * Math.random();
                            item.x = w * Math.random();
                        } else if (mode === "down") {
                            item.y = 1 - size;
                            item.x = w * Math.random();
                        }
                    }
                }
                window.requestAnimationFrame(draw);
            };
        });
    },
};
</script>
<style scoped>
#PoPo {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 9999;
}
</style>
