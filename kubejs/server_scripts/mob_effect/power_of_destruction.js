// priority: 6
/**
 * 崩毁之力
 * @param {Internal.LivingHurtEvent} event
 * @param {EntityHurtCustomModel} data
 * @returns
 */
function powerOfDestructionPlayerHurtByOthers(event, data) {
    let entity = event.source.actual
    if (!entity) return
    let player = event.entity
    if (entity.isLiving() && entity.hasEffect('kubejs:power_of_destruction')) {
        let amplifier = entity
            .getEffect('kubejs:power_of_destruction')
            .getAmplifier()

        if (player.getArmorValue() <= 0) {
            player.potionEffects.add('goety:busted', 20 * 8, amplifier + 2)
            entity.potionEffects.add('minecraft:strength', 20 * 8, amplifier + 5)
            event.amount += Math.floor(player.getMaxHealth() * 2.5 * (amplifier + 1))
        } else if (player.getArmorValue() < 20) {
            player.potionEffects.add('goety:busted', 20 * 8, amplifier + 1)
            entity.potionEffects.add('minecraft:strength', 20 * 8, amplifier + 3)
            event.amount += Math.floor(player.getMaxHealth() * 1.5 * (amplifier + 1))
        } else if (player.getArmorValue() >= 20) {
            player.potionEffects.add('goety:busted', 20 * 8, amplifier + 0)
            entity.potionEffects.add('minecraft:strength', 20 * 8, amplifier + 1)
            event.amount += Math.floor(player.getMaxHealth() * 0.5 * (amplifier + 1))
        }
    }
}