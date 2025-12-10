'使用客户端'

进口从“下一个/链接”导入链接链接来自进口
进口从"dayjs"导入dayjsdayjs来自进口"dayjs"导入dayjsdayjs来自
进口从进口汇入weekOfYearweekOfYear来自weekOfYear
进口从“运动/反应”导入进口运动}{运动运动从'动作/反应'

dayjs.延伸(weekOfYear)延伸(weekOfYear)
进口从进口汇入{useCallback、useEffect、useMemo、useRef、useStateuseCallback{useCallback，useEffect，useMemo，useRef，useState useEffect来自useMemo
进口从进口汇入{吐司吐司{吐司}from从...起
进口从“进口/常数"导入{animation_DELAY，INIT_DELAY}导入{animation_DELAY，INIT_DELAY}{从...…起'@/consts'{Consts'来自'@/consts'
进口从"进口/SVG/短线...起
进口从“进口/挂钩/use-blog-index"导入{useBlogIndex，类型BlogIndexItemuseBlogIndex"导入"导入{useBlogIndex，类型BlogIndexItemuseBlogIndex，类型BlogIndexItem
进口从“进口/挂钩/使用-读取-物品”导入{/hooks/us电子阅读文章"导入{useReadArticles}来自从……起
进口从“进口/SVG/Juejin.JuejinSVGfrom从...起
进口从“进口从“进口从“进口/挂钩//hooks/use-auth"导入{useAuthStore}来自从……起
进口从"进口/app/(homeuseConfigStore/store/config-store"导入{useConfigStore从……起{/store/config-store"导入{useConfigStore}
进口从“进口/Lib/file-utils"导入{readFileAsTextreadFileAsText"导入"导入{readFileAsText}来自从……起readFileAsText}来自从……起
进口从“进口/Lib/utils"导入{Cncn"导入"导入{CN}来自从...起CN}from从……起
进口从"./服务/批处理-进口-博客"导入{batchDeleteBlogsbatchDeleteBlogs{batchDeleteBlogs}from从...起
进口从"透明反应"导入进口检查}导入{{检查从'lucide-react'

TypeType DisplayMode=类型displayMode='天'|'周'|'月''天'|'年'|'月'|'年'

出口导出默认函数blogpage(){默认默认功能()blogpage
常量组件，加载}=项目()Const=装载items=useBlogIndex}=useBlogIndex
常量ConstisRead}=isRead()常数={=useReadArticles}=useReadArticles
常量ConstisAuth，setPrivateKey}=isAuth()常量=setPrivateKeyisAuth=useAuthStore}=useAuthStore
常量ConstsiteContent}=siteContent()常数={=useConfigStore}=useConfigStore
常量hideEditButton=站点内容。hideEditButton？？falseconsthideEditButton=站点内容。hideEditButton？？

Const keyInputRef=useRef<HTMLInputElement>keyInputRefnull)无效的=useRef<HTMLInputElement>keyInputRef=Const=useRef<HTMLInputElement>keyInputRef=无效的<HTMLInputElement>(Const无效的
常数ConsteditMode，setEditMode]=EditMode(假的)常数=useState=useStatesetEditModeeditMode=useState](=假的useState=useState
ConstConsteditableItems，setEditableItems]=editableItems=useState]<BlogIndexItem<<BlogIndexItem<editableItems>setEditableItems]=
常数ConstelectedSugs，setSelectedSugs]=selectedSugs<Set<string>>setSelectedSlugs新Set))线>>setSelectedSlugs新Set())线>>setSelectedSugs新Set<设定<string>>[新的设置setSelectedSlugs]新的设置setSelectedSlugs]=useState<新的设置setSelectedSugs新set=useState<设定<string>>>>
Const[保存，setSaving]=useState(假的)Const[储蓄，setSaving]=useState(假的)[保存，setSaving]=useState(假的)Const[储蓄，setSaving]=useState(假的)
ConstConstdisplayMode，setDisplayMode[=useState<<显示模式>>displayMode'年')

useEffect(()=>{
如果(！EditMode如果if！EditMode！EditMode如果if！EditMode如果！EditMode如果if！EditMode！EditMode如果if！EditMode！EditMode如果if！EditMode如果
			setEditableItems(项目)
		}
}，[项目，editMode])}，[项目，editMode])

常量displayItems=editMode？editableItems：项const displayItems=editMode？editableItems：项

康斯康斯特ConstgroupedItems，groupKeys，getGroupLabelgroupedItems，groupKeys，getGroupLabel}=groupedItems(()=>groupKeys(()=>getGroupLabel
constorted=Const...displayItems已排序=种类((a、b)...displayItems新日期(b。种类).getTime一个b.日期)-b()b。日期b.日期b.日期b.日期b.日期.日期)(((=>新的新的getTime日期getTime((constb.日期()=>新的getTime日期getTime=[())

Const组=已排序。减少(Constgrouped=已排序。已排序。减少(
(ACC，项目)=>(ACC, 项)=>{
let键：字符串let键：string
let标签：字符串let标签：string
常数日期=daysjs(项。日期)常数=dayjs=日期(=dayjs

开关(显示模式开关开关显示模式显示模式开关开关displayMode开关显示模式开关开关显示模式显示模式开关开关显示模式显示模式开关开关displayMode开关
案例“天”：case案例：
钥匙=日期。格式('YYYY-MM-DD')日期。格式('YYYY-MM-DD')
标签=日期。格式('YYYY年MM月DD日')格式('YYYY年MM月DD日')
打破
案例'周':
Const周=日期。周()
键=`${日期。格式('YYYY')}-w${周。toString().padStart(2, '0')}`
标签=`${日期。格式('YYYY')}年第${周}周`
打破
案例'月':
钥匙=日期。格式('YYYY-MM')
标签=日期。格式('YYYYYYYY年MM月')
打破
案例'年':
默认:
钥匙=日期。格式('YYYY')
标签=日期。格式('YYYY年')
打破
				}

如果(！ACC[钥匙]) {
ACC[钥匙]={ 项目: [], 标签 }
				}
ACC[钥匙].项目.推(项)
返回ACC
			},
			{}作为记录作为记录作为记录作为记录
)

Const键=对象。键(分组的).种类((一个，b)=>对象。键(分组的).种类((一个，b)=>{
			// 按时间倒序排序
			如果 (displayMode==='周') {
				//周格式：YYYY-WW
				Const [年份a, weekA]=a.分离('-W').地图(数量)
				Const [年份b, weekB]=b.分离('-W').地图(数量)
				如果 (yeara！==yearB) 返回年份B-年份A
				返回weekB-weekA
			}
			返回b.locale比较(一个)
		})

返回{
			groupedItems：已分组，
			groupKeys：键，
			getGroupLabel: (钥匙：线)=>已分组[钥匙]?.标签||键
		}
	}, [displayItems，displayMode])

ConstelectedCount=selectedSugs。大小
ConstbuttonText=isAuth？'保存'：'导入密钥'

ConstoggleEditMode=useCallback(()=>{
		如果 (EditMode) {
			setEditMode(假的)
			setEditableItems(项目)
			setSelectedSlugs(新的设置())
		}其他{
			setEditableItems(项目)
			setEditMode(正确)
		}
	}, [EditMode，项目])

ConstoggleSelect=useCallback((鼻涕虫：线)=>{
		setSelectedSlugs(上一个=>{
Const下一个=新的设置(上一个)
			如果 (下一个。有(鼻涕虫)) {
下一个。删除(鼻涕虫)
			} 其他 {
下一个。添加(鼻涕虫)
			}
			返回下一个
		})
	}, [])

	// 全选所有文章
	ConsthandleSelectAll=useCallback(()=>{
		setSelectedSlugs(新的设置(editableItems。地图(项=>项目。鼻涕虫)))
	}, [editableItems])

	// 全选/取消全选某个时间维度分组
	ConsthandleSelectGroup=useCallback(
		(groupKey：string)=>{
			Const 组=groupedItems[groupKey]
			如果 (！组) 返回

			// 检查该分组是否所有文章都已选中
			Const allSelected=group。项目.每一个(项=>selectedSugs。有(项。鼻涕虫))

			setSelectedSlugs(prev => {
				const next = new Set(prev)
				if (allSelected) {
					// 如果已全选，则取消该分组的选择
					group.items.forEach(item => {
						next.delete(item.slug)
					})
				} else {
					// 如果未全选，则全选该分组
					group.items.forEach(item => {
						next.add(item.slug)
					})
				}
				return next
			})
		},
		[groupedItems, selectedSlugs]
	)

	// 取消全选
	const handleDeselectAll = useCallback(() => {
		setSelectedSlugs(new Set())
	}, [])

	const handleItemClick = useCallback(
		(event: React.MouseEvent, slug: string) => {
			if (!editMode) return
			event.preventDefault()
			event.stopPropagation()
			toggleSelect(slug)
		},
		[editMode, toggleSelect]
	)

	const handleDeleteSelected = useCallback(() => {
		if (selectedCount === 0) {
			toast.info('请选择要删除的文章')
			return
		}
		setEditableItems(prev => prev.filter(item => !selectedSlugs.has(item.slug)))
		setSelectedSlugs(new Set())
	}, [selectedCount, selectedSlugs])

	const handleCancel = useCallback(() => {
		setEditableItems(items)
		setSelectedSlugs(new Set())
		setEditMode(false)
	}, [items])

	const handleSave = useCallback(async () => {
		const removedSlugs = items.filter(item => !editableItems.some(editItem => editItem.slug === item.slug)).map(item => item.slug)

		if (removedSlugs.length === 0) {
			toast.info('没有需要保存的改动')
			return
		}

		try {
			setSaving(true)
			await batchDeleteBlogs(removedSlugs)
			setEditMode(false)
			setSelectedSlugs(new Set())
		} catch (error: any) {
			console.error(error)
			toast.error(error?.message || '保存失败')
		} finally {
			setSaving(false)
		}
	}, [editableItems, items])

	const handleSaveClick = useCallback(() => {
		if (!isAuth) {
			keyInputRef.current?.click()
			return
		}
		void handleSave()
	}, [handleSave, isAuth])

	const handlePrivateKeySelection = useCallback(
		async (file: File) => {
			try {
				const pem = await readFileAsText(file)
				setPrivateKey(pem)
				toast.success('密钥导入成功，请再次点击保存')
			} catch (error) {
				console.error(error)
				toast.error('读取密钥失败')
			}
		},
		[setPrivateKey]
	)

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (!editMode && (e.ctrlKey || e.metaKey) && e.key === ',') {
				e.preventDefault()
				toggleEditMode()
			}
		}

		window.addEventListener('keydown', handleKeyDown)
		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [editMode, toggleEditMode])

	return (
		<>
			<input
				ref={keyInputRef}
				type='file'
				accept='.pem'
				className='hidden'
				onChange={async e => {
					const f = e.target.files?.[0]
					if (f) await handlePrivateKeySelection(f)
					if (e.currentTarget) e.currentTarget.value = ''
				}}
			/>

			<div className='flex flex-col items-center justify-center gap-6 px-6 pt-24 max-sm:pt-24'>
				{items.length > 0 && (
					<motion.div
						initial={{ opacity: 0, scale: 0.6 }}
						animate={{ opacity: 1, scale: 1 }}
						className='card relative mx-auto flex items-center gap-1 rounded-xl p-1 max-sm:hidden'>
						{(['day', 'week', 'month', 'year'] as DisplayMode[]).map(mode => (
							<motion.button
								key={mode}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								onClick={() => setDisplayMode(mode)}
								className={cn(
									'rounded-lg px-3 py-1.5 text-xs font-medium transition-all',
									displayMode === mode ? 'bg-brand text-white shadow-sm' : 'text-secondary hover:text-brand hover:bg-white/60'
								)}>
								{mode === 'day' ? '日' : mode === 'week' ? '周' : mode === 'month' ? '月' : '年'}
							</motion.button>
						))}
					</motion.div>
				)}

				{groupKeys.map((groupKey, index) => {
					const group = groupedItems[groupKey]
					if (!group) return null

					return (
						<motion.div
							key={groupKey}
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ delay: INIT_DELAY / 2 }}
							className='card relative w-full max-w-[840px] space-y-6'>
							<div className='mb-3 flex items-center justify-between gap-3 text-base'>
								<div className='flex items-center gap-3'>
									<div className='font-medium'>{getGroupLabel(groupKey)}</div>
									<div className='h-2 w-2 rounded-full bg-[#D9D9D9]'></div>
									<div className='text-secondary text-sm'>{group.items.length} 篇文章</div>
								</div>
								{editMode &&
									(() => {
										const groupAllSelected = group.items.every(item => selectedSlugs.has(item.slug))
										return (
											<motion.button
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
												onClick={() => handleSelectGroup(groupKey)}
												className={cn(
													'rounded-lg border px-3 py-1 text-xs transition-colors',
													groupAllSelected
														? 'border-brand/40 bg-brand/10 text-brand hover:bg-brand/20'
														: 'text-secondary hover:border-brand/40 hover:text-brand border-transparent bg-white/60 hover:bg-white/80'
												)}>
												{groupAllSelected ? '取消全选' : '全选该分组'}
											</motion.button>
										)
									})()}
							</div>
							<div>
								{group.items.map(it => {
									const hasRead = isRead(it.slug)
									const isSelected = selectedSlugs.has(it.slug)
									return (
										<Link
											href={`/blog/${it.slug}`}
											key={it.slug}
											onClick={event => handleItemClick(event, it.slug)}
											className={cn(
												'group flex min-h-10 items-center gap-3 py-3 transition-all',
												editMode
													? cn(
															'rounded-lg border px-3',
															isSelected ? 'border-brand/60 bg-brand/5' : 'hover:border-brand/40 border-transparent hover:bg-white/60'
														)
													: 'cursor-pointer'
											)}>
											{editMode && (
												<span
													className={cn(
														'flex h-4 w-4 items-center justify-center rounded-full border text-[10px] font-semibold',
														isSelected ? 'border-brand bg-brand text-white' : 'border-[#D9D9D9] text-transparent'
													)}>
													<Check />
												</span>
											)}
											<span className='text-secondary w-[44px] shrink-0 text-sm font-medium'>{dayjs(it.date).format('MM-DD')}</span>

											<div className='relative flex h-2 w-2 items-center justify-center'>
												<div className='bg-secondary group-hover:bg-brand h-[5px] w-[5px] rounded-full transition-all group-hover:h-4'></div>
												<ShortLineSVG className='absolute bottom-4' />
											</div>
											<div
												className={cn(
													'flex-1 truncate text-sm font-medium transition-all',
													editMode ? null : 'group-hover:text-brand group-hover:translate-x-2'
												)}>
												{it.title || it.slug}
												{hasRead && <span className='text-secondary ml-2 text-xs'>[已阅读]</span>}
											</div>
											<div className='flex flex-wrap items-center gap-2 max-sm:hidden'>
												{(it.tags || []).map(t => (
													<span key={t} className='text-secondary text-sm'>
														#{t}
													</span>
												))}
											</div>
										</Link>
									)
								})}
							</div>
						</motion.div>
					)
				})}
				{items.length > 0 && (
					<div className='text-center'>
						<motion.a
							initial={{ opacity: 0, scale: 0.6 }}
							animate={{ opacity: 1, scale: 1 }}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							href='https://qm.qq.com/q/B4CjO0Oure'
							target='_blank'
							className='card text-secondary static inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs'>
							<JuejinSVG className='h-4 w-4' />
							更多
						</motion.a>
					</div>
				)}
			</div>

			<div className='pt-12'>
				{!loading && items.length === 0 && <div className='text-secondary py-6 text-center text-sm'>暂无文章</div>}
				{loading && <div className='text-secondary py-6 text-center text-sm'>加载中...</div>}
			</div>

			<motion.div
				initial={{ opacity: 0, scale: 0.6 }}
				animate={{ opacity: 1, scale: 1 }}
				className='absolute top-4 right-6 flex items-center gap-3 max-sm:hidden'>
				{editMode ? (
					<>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={handleCancel}
							disabled={saving}
							className='rounded-xl border bg-white/60 px-6 py-2 text-sm'>
							取消
						</motion.button>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={selectedCount === editableItems.length ? handleDeselectAll : handleSelectAll}
							className='rounded-xl border bg-white/60 px-4 py-2 text-sm transition-colors hover:bg-white/80'>
							{selectedCount === editableItems.length ? '取消全选' : '全选'}
						</motion.button>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={handleDeleteSelected}
							disabled={selectedCount === 0}
							className='rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-600 transition-colors disabled:opacity-60'>
							删除(已选:{selectedCount}篇)
						</motion.button>
						<motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleSaveClick} disabled={saving} className='brand-btn px-6'>
							{saving ? '保存中...' : buttonText}
						</motion.button>
					</>
				) : (
					!hideEditButton && (
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={toggleEditMode}
							className='bg-card rounded-xl border px-6 py-2 text-sm backdrop-blur-sm transition-colors hover:bg-white/80'>
							编辑
						</motion.button>
					)
				)}
			</motion.div>
		</>
	)
}
