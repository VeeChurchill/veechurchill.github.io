
class Explosion extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
      super(scene, x, y, "explosion");
      scene.add.existing(this);
      this.play("explode");
    }

    
publishMyDeathNews(bullet, avatar) {
    if (amIalive) {
      deadPlayerCh.publish("dead-notif", {
        killerBulletId: bulletThatShotMe,
        deadPlayerId: myClientId,
      });
    }
    amIalive = false;
  }
  }